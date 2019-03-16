terraform {
  required_version = "=0.11.11"
}

provider "aws" {
  version = "2.2"
  region = "eu-central-1"
  allowed_account_ids = ["651625262782"]
}

//CircleCi technical user
resource "aws_iam_user" "circle-ci" {
  name = "circle-ci"
}