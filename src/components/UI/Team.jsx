import React from 'react';
import '../../styles/team.css';
import team01 from '../../images/team-01.jpg';
import team02 from '../../images/team-02.jpg';
import team03 from '../../images/team-03.jpg';
import team04 from '../../images/team-04.jpg';

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Martin Bories',
        position: 'Product CEO'
    },
    {
        imgUrl: team02,
        name: 'Jessica Ombaso',
        position: 'Human Resource Manager'
    },
    {
        imgUrl: team03,
        name: 'Kevin Clinton',
        position: 'Product Designer'
    },
    {
        imgUrl: team04,
        name: 'Kelvin Njoro',
        position: 'Full Stack Developer'
    },
]


const Team = () => {
  return (
    <section className='our_team'>
        <div className="container">
            <div className="team_content">
                <h6 className="subtitle">Our Team</h6>
                <h2>Meet with <span className="highlight">our team</span>
                </h2>
            </div>

            <div className="team_wrapper">
                {
                    teamMembers.map((item,index)=> (
                        <div className="team_item" key={index}>
                            <div className="team_img">
                                <img src={item.imgUrl} alt="" />
                            </div>
                        <div className="team_details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.position}</p>

                        <div className="team_member-social">
                            <span><i className="ri-linkedin-line"></i></span>
                            <span><i className="ri-twitter-line"></i></span>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team;