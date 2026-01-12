import { Separator } from "~/components/ui/separator";
import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "~/common/components/ui/navigation-menu"

  const menus = [
    {
        name : "Products",
        to : "/products",
        items:[
            {
                name : "Leaderboards",
                discription : "See the top performers in your community",
                to : "/products/leaderboards",
            },
            {
                name : "Categories",
                discription : "See the top categories in your community",
                to : "/products/categories"
            },
            {
                name : "Search",
                discription : "Search for a product",
                to : "/products/search"
            },
            {
                name : "Submit a Product",
                discription : "Submit a product to our community",
                to : "/products/submit"
            },
            {
                name : "Promote",
                discription : "Promote a product to our community",
                to : "/products/promote"
            }
        ]
    },
    {
        name : "Jobs",
        to : "/jobs",
        items:[
            {
                name : "Remote Jobs",
                discription : "Find a remote job in our community",
                to : "/jobs?location=remote",
            },
            {
                name : "Full-Time Jobs",
                discription : "Find a full-time job in our community",
                to : "/jobs?type=full-time",
            },
            {
                name : "Freelance Jobs",
                discription : "Find a freelance job in our community",
                to : "/jobs?type=freelance",
            },
            {
                name : "Internships",
                discription : "Find an internship in our community",
                to : "/jobs?type=internship",
            },
            {
                name : "FSubmit a Job",
                discription : "Submit a job to our community",
                to : "/jobs/submit",
            }
        ]
    },
    {
        name : "Community",
        to : "/community",
        items:[
            {
                name : "All Posts",
                discription : "See all posts in our community",
                to : "/community",
            },
            {
                name : "Top Posts",
                discription : "See the top posts in our community",
                to : "/community?sort=top",
            },
            {
                name : "New Posts",
                discription : "See the new posts in our community",
                to : "/community?sort=new",
            },
            {
                name : "Create a Post",
                discription : "Create a post in our community",
                to : "/community/create",
            }
        ]
    },
    {
        name : "IdeasGPT",
        to : "/ideas",
    },
    {
        name : "Teams",
        to : "/teams",
        items:[
            {
                name : "All Teams",
                discription : "See all teams in our community",
                to : "/teams",
            },
            {
                name : "Create a Team",
                discription : "Create a team in our community",
                to : "/teams/create",
            }
        ]
    }
  ]

export default function Navigation() {
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tighter text-lg">WOORI</Link>
                <Separator aria-orientation="vertical" className="h-6 mx-4" />
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu) => (
                            <NavigationMenuItem key={menu.name}>
                                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {menu.items?.map((item) => (
                                        <NavigationMenuItem key={item.name}>
                                            <Link to={item.to}>{item.name}</Link>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}