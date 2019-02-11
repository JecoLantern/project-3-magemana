import React from 'react'
import '../styles/task.css'
import ListItem from "./components/Character";
const Characters = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="card tasks"></div>
                    {this.state.characters.length ? this.state.characters.map(char => {
                        return <ListItem
                            name={char.name}
                            key={char._id}
                            _id={char._id}
                            onClick={this.handleSelect}
                            lvl={char.level}
                        />
                    }) : <h4>No Characters Found</h4>}

                        <div className="single-task" key={char}>
                            <h4>{char}</h4>
                            <a
                                onClick={(e) => {
                                    props.deleteTask(char);
                                }}
                            >
                                <i className="fa fa-close"></i>
                            </a>
                        </div>
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
</div>

)
export default Tasks