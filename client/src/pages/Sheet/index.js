import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "../Sheet/_charSheetSty.css";
import API from "./util/API.js";
import utility from "./util/utilFunctions"
//Importing CharSheet Components
import Logo from "./components/logo";
import Avatar from "./components/avatar";
//Importing NamePlate Components
import NamePlate from "./components/namePlate";


import AttributeBlock from "./components/attributeBlock";
import SaveBlock from "./components/saveblocks"
import VitalBlock from "./components/vitalBlock";
import TertiaryAttribute from "./components/tertiaryAttribute";
import CharacterFeatures from "./components/charFeatures";
import HpBlock from "./components/hpBlock";
import HitDice from "./components/hitDice";
import SkillsBlock from "./components/skillsBlock";
import Equipment from "./components/equipment";



class CharacterSheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CharModel: {
                skills: []
            },
            item: ""
        };
    }

    componentDidMount() {
        this.idHandle(this.props, this.getCharacter)
    }

    idHandle = (props, callback) => {
        this.setState({
            id: props.match.params.id
        }, () => {
            callback(this.state.id)
        })
    }

    getCharacter = (id) => {
        API.getCharSheet(id)
            .then(res => {
                this.setState({ CharModel: res.data })
                console.log(this.state.CharModel)
            })
            .then(res => this.setState({ CharModel: utility.runInitialize(this.state.CharModel) }))
            .then(res => { this.idHandle() })
            .catch(err => console.log(err));
    }

    equipPush = (event) => {
        const NewModel = { ...this.state.CharModel };
        NewModel.equipment = [...NewModel.equipment, this.state.item]
        this.setState({ CharModel: NewModel })
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({ item: event.target.value })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Logo></Logo>
                    <Avatar></Avatar>
                    <NamePlate
                        name={this.state.CharModel.name}
                        level={this.state.CharModel.level}
                        race={this.state.CharModel.race}
                        alignment={this.state.CharModel.alignment}
                        className={this.state.CharModel.className}
                    />
                </Row>
                <Row>
                    <Col size="6, sm-6, md-6, lg-6, xl-6">
                        {this.state.CharModel.attributes ? (
                            <Row>
                                {this.state.CharModel.attributes.map(attr => (

                                    <AttributeBlock key={attr._id}>
                                        <div className="attCentral">
                                            <div id="rectangle"><p className="attributeTxt">{attr.attr}</p></div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded"><p className="valueTxt">{attr.val}</p></div>
                                                <h6>mod:</h6>
                                                <h4>
                                                    {utility.attrMod(attr)}
                                                </h4>
                                            </div>
                                        </div>
                                    </AttributeBlock>

                                ))}
                                {this.state.CharModel.savingThrows.map(save => (
                                    <Col size="2">
                                        <SaveBlock
                                            name={save.name}
                                            val={save.val}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        ) : (
                                <Row>
                                    <AttributeBlock>
                                        <div>
                                            <div id="rectangle">ATTR</div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded">VALUE</div>
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                            <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                    <AttributeBlock>
                                        <div>
                                            <div id="rectangle">ATTR</div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded">VALUE</div>
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                            <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                    <AttributeBlock>
                                        <div>
                                            <div id="rectangle">ATTR</div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded">VALUE</div>
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                            <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                    <AttributeBlock>
                                        <div>
                                            <div id="rectangle">ATTR</div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded">VALUE</div>
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                            <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                    <AttributeBlock>
                                        <div>
                                            <div id="rectangle">ATTR</div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded">VALUE</div>
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                            <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                    <AttributeBlock>
                                        <div>
                                            <div id="rectangle">ATTR</div>
                                            <div id="squareTV">
                                                <div id="rectangleRounded">VALUE</div>
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                            <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                </Row>
                            )}
                    </Col>
                    <Col size="6, sm-6, md-6, lg-6, xl-6">
                        <Row>
                            <VitalBlock>
                                <div id="hexagon1"><h6 className="armorclassTxt">ARMOR<br></br>CLASS</h6>
                                    <div id="hexagon2armorclass"><h6 className="hexagonTxt2">{this.state.CharModel.armorClass}</h6></div>
                                </div>
                            </VitalBlock>
                            <VitalBlock>
                                <div id="hexagon1"><h6 className="initiativeTxt">INITIATIVE</h6>
                                    <div id="hexagon2"><h6 className="hexagonTxt2">{this.state.CharModel.initiative}</h6></div>
                                </div>
                            </VitalBlock>
                            <VitalBlock>
                                <div id="hexagon1"><h6 className="speedTxt">SPEED</h6>
                                    <div id="hexagon2"><h6 className="hexagonTxt2">{this.state.CharModel.speed}</h6></div>
                                </div>
                            </VitalBlock>
                            <TertiaryAttribute>
                                <div id="squareTV2"><h6 className="tertiaryTxtproficiency">PROFICIENCY BONUS: </h6>
                                    <div id="rectangleRounded2">
                                    <p className="profBonVal">{utility.proficiencieBonus(this.state.CharModel.level)}</p>
                                    </div>
                                </div>
                                <div id="squareTV3"><h6 className="tertiaryTxtinspiration">INSPIRATION:</h6>
                                    <div id="rectangleRounded3">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark checkmarkPosition"></span>
                                    </label>
                                    </div>
                                </div>
                            </TertiaryAttribute>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="9, sm-9, md-9, lg-12, xl-9">
                        <Row>
                            <SkillsBlock
                                skillList={this.state.CharModel.skillList}
                            />
                            <Equipment
                                onSubmit={this.equipPush}
                                handleChange={this.handleChange}
                                equipment={this.state.CharModel.equipment}
                                value={this.state.item}
                                money={this.state.CharModel.money}
                            />
                            <CharacterFeatures
                                features={this.state.CharModel.features}
                            />
                        </Row>
                    </Col>
                    <Col size="3, sm-3, md-3, lg-12, xl-3">
                        <Row>
                            {/* <Col size="6, sm-6, md-6, lg-6"> */}
                            <HpBlock
                                health={this.state.CharModel.health}
                            />
                            <HitDice
                                hitDice={utility.hitDiceDisplay(this.state.CharModel.hitDice, this.state.CharModel.level)}
                            />
                            {/* </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

};

export default CharacterSheet;