variable k1 { default = ["v1","v2","v3"] }

locals {
    obj = { for ix,v in var.secrets: v => var.k1[ix] }

}

variable "secrets" {
    default = ["A", "B", "C"]
}

