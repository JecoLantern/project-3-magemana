import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "../Sheet/_charSheetSty.css";
import API from "./util/API.js";

//Importing CharSheet Components
import Logo from "./components/logo";
import Avatar from "./components/avatar";
//Importing NamePlate Components
import NamePlate from "./components/namePlate";
import Name from "./components/name";
import Background from "./components/background";
import ExpPoints from "./components/expPoints";
import Race from "./components/race";
import Alignment from "./components/alignment";
import ClassLVL from "./components/classLvL";
import SideBar from "../../components/SideBar/SideBar"
import './styles/sidebar.css'

import AttributeBlock from "./components/attributeBlock";
import VitalBlock from "./components/vitalBlock";
import TertiaryAttribute from "./components/tertiaryAttribute";
import CharacterFeatures from "./components/charFeatures";
import HpBlock from "./components/hpBlock";
import HitDice from "./components/hitDice";
import SkillsBlock from "./components/skillsBlock";
import Equipment from "./components/equipment";



class CharacterSheet extends Component{
    constructor(props){
        super(props)
        this.state = {
            CharModel: []
        };
    }

    componentDidMount() {
        API.getCharSheet(this.props.match.params.id)
            .then(res => {
                this.setState({ CharModel: res.data})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
        
              
            <Container>
                    <div id="App">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                <div id="page-wrap">
                <Row>
                    <Logo></Logo>
                    <Avatar></Avatar>
                    <NamePlate>
                        <Name>
                            <h2 className="fs768 fs850 fs750 fs480">{this.state.CharModel.name}</h2>
                        </Name>
                        <Background>
                            <h2 className="fs768 fs850 fs750 fs480">Background</h2>
                        </Background>
                        <ExpPoints>
                            <h2 className="fs768 fs850 fs750 fs480">ExpPoints</h2>
                        </ExpPoints>
                        <Race>
                            <h2 className="fs768 fs850 fs750 fs480v2">{this.state.CharModel.race}</h2>
                        </Race>
                        <Alignment>
                            <h2 className="fs768 fs850 fs750 fs480v2">{this.state.CharModel.alignment}</h2>
                        </Alignment>
                        <ClassLVL>
                            <h2 className="fs768 fs850 fs750 fs480">{this.state.CharModel.class} | <small>Level:</small>{this.state.CharModel.level}</h2>
                        </ClassLVL>
                    </NamePlate>
                 
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
                                                (MOD)
                                            </div>
                                            <div id="oval">SAVE
                                                <div id="circle"></div>
                                            </div>
                                        </div>
                                    </AttributeBlock>
                                ))}
                            </Row>
                        ):(
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
                            <div id="squareTV2"><h6 className="tertiaryTxtproficiency">PROFICIENCY BONUS</h6>
                                <div id="rectangleRounded2"></div>
                            </div>
                            <div id="squareTV3"><h6 className="tertiaryTxtinspiration">INSPIRATION</h6>
                                <div id="rectangleRounded3"></div>
                            </div>
                        </TertiaryAttribute>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="9, sm-9, md-9, lg-12, xl-9">
                    <Row>
                        <SkillsBlock></SkillsBlock>
                        <Equipment></Equipment>
                        <CharacterFeatures></CharacterFeatures>
                    </Row>
                    </Col>
                    <Col size="3, sm-3, md-3, lg-12, xl-3">
                    <Row>
                        {/* <Col size="6, sm-6, md-6, lg-6"> */}
                            <HpBlock></HpBlock>
                            <HitDice></HitDice>
                        {/* </Col> */}
                    </Row>
                    </Col>
                    
                </Row>
                </div>
                </div>
            </Container>
          
            
            
        )
    }

};

export default CharacterSheet;