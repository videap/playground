variable var1 {
    type = map(map(string))
    default = {
        key1 = {"keyA": "value1a", "keyB": "value1b"}
        key2 = {"keyA": "value2a", "keyB": "value2b"}
        key3 = {"keyB": "DONT"}
        key4 = {"keyA": "value4a", "keyB": "value4b"}
    }
}

variable var2 {
    type = map(map(string))
    default = {
        key3 = {"key3a": "value3a", "key3b": "value3b"}
        key4 = {"key4a": "value4a", "key4b": "value4b"}
    }
}

variable var3 {
    type = any
    default = {
        key1 = {keyA = "A", keyB = "B", 
            retry_config = { keyC = "C", keyD = "D" }
        }
        key2 = {keyA = "A2", keyB = "B2", 
            retry_config = { keyC = "C2", keyD = "D2" }
        }
        key3 = {keyA = "A3", keyB = "B3"
        }
        key4 = {keyA = "A4", keyB = "B4", 
            retry_config = { keyC = "C4", keyD = "D4" }
        }
    }
}

locals {
      maps = {for i in [9,10]: "key${i}" => "value${i}" }
}

# resource "local_file" "maps" {
#     for_each = local.maps
#     content  = each.value
#     filename = each.key
# }


# resource "local_file" "var1" {
#     for_each = {for k, v in var.var1: k => v if try(v.keyA, false) != false}
#     content  = each.value.keyA
#     filename = each.key
# }

resource "local_file" "var3" {
    for_each = { for k,v in var.var3: k => v if try(v.retry_config, false) != false }
    content  = each.value.retry_config.keyC
    filename = each.value.retry_config.keyD
}



# output "maps" {
#     value = local.maps
# }

output "var3" {
    value = var.var1
}