const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const passport = require('../../passport')


// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function (req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	console.log(req.body)
	let { username, password } = req.body
	console.log(username, password)
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		console.log("building newUser..")
		const newUser = new User({
			'local.username': username,
			'local.password': password
		})
		if (!newUser.local.password) {
			return console.log('=======NO PASSWORD PROVIDED=======')
		}
		newUser.local.password = newUser.hashPassword(password)
		newUser.save(function (err, newUser) {
			if (err) return res.json(err);
			console.log(newUser)
			return res.json(newUser)
		})
	})
})

module.exports = router
