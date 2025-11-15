

package_type : "events" ,
author : "author name" ,
name   : "Beispiel Name für das Package"  ,
date   : "000000"  ,
id     : id    ,

    desc : "",



HEAD

        ID : "id_string_set_by_code"
        Rarity : 1
        Allowed_Action : [ "harvest" , "hunt" , "wood" , ... ]
        Allowed_Region : [ "forest" , "forest" , "river" , "hill" , ... , "customRegion167234" ]
        Allowed_Daytime : [ "day" , "newmoon" , "halfmoon_g" , "halfmoon_l" , "fullmoon" ]
        Allowed_Temp : [ -2 , -1 , 0 , 1 , 2 ]
        Allowed_Weather : [ "clear" , "cloudy" , ... ]
        Activating_Tags : None | [ ... ]
        Deactivating_Tags : None | [ ... ]
        CW : false
        Harsh : false

    Deactivating_Tags overwrites Activating_Tags

BODY

        Titel : "Titel"
        Desc : "Description"
        Challenges Multipliable
            Keyword : None | "Weapon" | ...
            Attribute : "Strenght" | "Wisdom" | "Dexterity"
            Target : 2
            Scope : "One" | "All" | "Group"
            Passed
                Add_Tags : [ ... ]
                Remove_Tags : [ ... ]
                Desc : "Description"
                Loot siehe Items
                    Naturals : 0
                    Hunt : 0
                    Wood : 0
                Afflictions
                    Wound : 0
                    Hunger : 0
                    Hypothermia : 0
                    Exhaustion : 0
            Failed
                Add_Tags : [ ... ]
                Remove_Tags : [ ... ]
                Desc : "Description"
                Loot siehe Items
                    Naturals : 0
                    Hunt : 0
                    Wood : 0
                Afflictions
                    Wound : 0
                    Hunger : 0
                    Hypothermia : 0
                    Exhaustion : 0
            Finally
                Add_Tags : [ ... ]
                Remove_Tags : [ ... ]
                Desc : "Description"
                Loot siehe Items
                    Naturals : 0
                    Hunt : 0
                    Wood : 0
                Afflictions
                    Wound : 0
                    Hunger : 0
                    Hypothermia : 0
                    Exhaustion : 0
        Finally
            Add_Tags : [ ... ]
            Remove_Tags : [ ... ]
            Desc : "Description"
            Loot siehe Items
                Naturals : 0
                Hunt : 0
                Wood : 0
            Afflictions
                Wound : 0
                Hunger : 0
                Hypothermia : 0
                Exhaustion : 0

