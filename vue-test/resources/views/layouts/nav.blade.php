<nav class="tabs is boxed">
      <div class="container">
        <ul>
        <router-link tag="li" to='/' exact>
           <a>Home</a>
        </router-link>

        <router-link tag="li" to='/about'>
           <a>About</a>
        </router-link>

        <router-link tag="li" to='/contact'>
           <a>Contact</a>
        </router-link>

        <router-view></router-view>
        </ul>
      </div>
</nav>