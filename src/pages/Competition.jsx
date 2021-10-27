import React, { Component } from 'react';
import CompetitionList from '../components/CompetitionList';
import SideBar from '../components/SideBar';
import Pagination from './Pagination';
import {ReactComponent as SortIcon}from'/home/keny/tlfrontend/src/images/sort.svg';
class CompetitionPage extends Component {
    state={
        selectedValue:"",
        posts:[],
        CurrentPage:1,
        PostsPerPage:8,
    }
    componentDidMount(){
    let PostVariables=[]
    for (let i = 0; i < 100; i++) {
        PostVariables.push(i); 
    }
    this.setState({
        posts:PostVariables
    })
    }
    ChangeThePageData=(number)=>{
        this.setState({
            CurrentPage:number
        })
    }
    HandleInputChange=(event)=>{
this.setState({
    selectedValue:event.target.value,
})
    }
    render() { 
    const indexOfLastPost=this.state.CurrentPage*this.state.PostsPerPage;
    const indexOfFirstPost=indexOfLastPost-this.state.PostsPerPage;
    const CurrentPosts=this.state.posts.slice(indexOfFirstPost,indexOfLastPost) 
        return <div className="">
            <SideBar/>
            <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-auto ">
                <div className=" flex flex-row mt-10 space-x-36 ml-10 ">
                    <p className=" text-xl w-20 relative">Name<SortIcon className="absolute left-12 w-8 h-6 top-0.5 "/></p>
                    <p className="text-xl  w-20 relative">Begin<SortIcon className="absolute left-12 w-8 h-6 top-0.5 "/></p>
                    <p className="text-xl  w-16 relative">End<SortIcon className="absolute left-7 w-8 h-6 top-0.5 "/></p>
                    <select  value={this.state.selectedValue} className="border-2 border-gray-300 w-24 bg-white rounded-lg outline-none" onChange={this.HandleInputChange}>
                        <option value="onGoing">Ongoing</option>
                        <option value="Live">Live</option>
                        <option value="Finished">Finished</option>
                    </select>
                </div>
           {
               CurrentPosts.map(item=>{
                   return <CompetitionList key={item} number={item}/>
               })
           }
           <Pagination posts={this.state.posts} PostsPerPage={this.state.PostsPerPage} paginate={(value)=>{this.ChangeThePageData(value)}}/>
            </div>
      </div>;
    }
}
 
export default CompetitionPage;