import React from 'react'



const Navigation = ({search,setSearch}) => {
    return (
			<div className='navigation'>
				<nav>
					<div className='container-nav'>
					    <h1 className='text-3xl font-bold reduce'>Movie App</h1>
					    <div className='search'>
							<form action='#'>
								<input
									type='text'
									className='input'
									value={search}
									onChange={(e)=>setSearch(e.target.value)}
									placeholder='Search Movies'
								/>
								
							</form>
						</div>
					</div>
				</nav>
			</div>
		);
}

export default Navigation
