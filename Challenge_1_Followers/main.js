$(document).ready(function(){
    let users = [
        { name: { first: "John", last: "Doe" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg" } },
        { name: { first: "Jane", last: "Smith" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg" } },
        { name: { first: "Alice", last: "Johnson" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg" } },
        { name: { first: "Michael", last: "Brown" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg" } },
        { name: { first: "David", last: "Wilson" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg" } },
        { name: { first: "Emily", last: "Clark" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg" } },
        { name: { first: "Sophia", last: "Martinez" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg" } },
        { name: { first: "Daniel", last: "Garcia" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg" } },
        { name: { first: "Olivia", last: "Lopez" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg" } },
        { name: { first: "Matthew", last: "Harris" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg" } },
        { name: { first: "Henry", last: "Walker" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg" } },
        { name: { first: "Isabella", last: "Young" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg" } },
        { name: { first: "Ethan", last: "Allen" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg" } },
        { name: { first: "Ava", last: "King" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg" } },
        { name: { first: "Mason", last: "Wright" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg" } },
        { name: { first: "Charlotte", last: "Scott" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg" } },
        { name: { first: "Logan", last: "Green" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg" } },
        { name: { first: "Mia", last: "Adams" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg" } },
        { name: { first: "Lucas", last: "Baker" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg" } },
        { name: { first: "Amelia", last: "Gonzalez" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg" } },
        { name: { first: "Benjamin", last: "Nelson" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg" } },
        { name: { first: "Harper", last: "Carter" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg" } },
        { name: { first: "James", last: "Mitchell" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg" } },
        { name: { first: "Evelyn", last: "Perez" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg" } },
        { name: { first: "Alexander", last: "Roberts" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg" } },
        { name: { first: "Ella", last: "Turner" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg" } },
        { name: { first: "Jack", last: "Phillips" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg" } },
        { name: { first: "Scarlett", last: "Campbell" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg" } },
        { name: { first: "Sebastian", last: "Parker" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg" } },
        { name: { first: "Grace", last: "Evans" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg" } },
        { name: { first: "Daniel", last: "Edwards" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg" } },
        { name: { first: "Chloe", last: "Collins" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg" } },
        { name: { first: "Liam", last: "Stewart" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg" } },
        { name: { first: "Victoria", last: "Morris" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg" } },
        { name: { first: "Owen", last: "Rodriguez" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg" } },
        { name: { first: "Hannah", last: "Hall" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg" } },
        { name: { first: "Gabriel", last: "Garcia" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg" } },
        { name: { first: "Samantha", last: "Davis" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/38.jpg" } },
        { name: { first: "Carter", last: "Thompson" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg" } },
        { name: { first: "Lily", last: "Anderson" }, picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg" } } ];
  
   renderUserList(users);
      
    

      
      function renderUserList(uerArray){
        $(".userList").empty();
        uerArray.forEach(user => {
            var userItem =  `
            <li class="userListRow">
            <div class="profileImgName">
                <img src="${user.picture.thumbnail}" class="profileImg" alt="User Image">
                <span class="userListName">${user.name.first} ${user.name.last}</span>
            </div>
                <button class="followBtn notFollowing">Follow</button>
            </li>
        `;

        $(".userList").append(userItem); // Append user to the list

        })
      }

      $(".userList").on("click",".followBtn",function(){
        $(this).toggleClass("following notFollowing");
      })

      $(".searchBoxText").on("keyup",function(){
        let searchText = $(this).val().toLowerCase();
        console.log("hi");
        let filteredUsers = users.filter(user => 
            `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchText)
        );
        renderUserList(filteredUsers);
      })
         
})