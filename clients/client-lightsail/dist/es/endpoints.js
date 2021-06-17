import { __assign } from "tslib";
// Partition default templates
var AWS_TEMPLATE = "lightsail.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "lightsail.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "lightsail.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "lightsail.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "lightsail.{region}.amazonaws.com";
// Partition regions
var AWS_REGIONS = new Set([
    "af-south-1",
    "ap-east-1",
    "ap-northeast-1",
    "ap-northeast-2",
    "ap-northeast-3",
    "ap-south-1",
    "ap-southeast-1",
    "ap-southeast-2",
    "ca-central-1",
    "eu-central-1",
    "eu-north-1",
    "eu-south-1",
    "eu-west-1",
    "eu-west-2",
    "eu-west-3",
    "me-south-1",
    "sa-east-1",
    "us-east-1",
    "us-east-2",
    "us-west-1",
    "us-west-2",
]);
var AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);
export var defaultRegionInfoProvider = function (region, options) {
    var regionInfo = undefined;
    switch (region) {
        // First, try to match exact region names.
        case "ap-northeast-1":
            regionInfo = {
                hostname: "lightsail.ap-northeast-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-northeast-2":
            regionInfo = {
                hostname: "lightsail.ap-northeast-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-south-1":
            regionInfo = {
                hostname: "lightsail.ap-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-southeast-1":
            regionInfo = {
                hostname: "lightsail.ap-southeast-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-southeast-2":
            regionInfo = {
                hostname: "lightsail.ap-southeast-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ca-central-1":
            regionInfo = {
                hostname: "lightsail.ca-central-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-central-1":
            regionInfo = {
                hostname: "lightsail.eu-central-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-north-1":
            regionInfo = {
                hostname: "lightsail.eu-north-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-1":
            regionInfo = {
                hostname: "lightsail.eu-west-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-2":
            regionInfo = {
                hostname: "lightsail.eu-west-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-3":
            regionInfo = {
                hostname: "lightsail.eu-west-3.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-east-1":
            regionInfo = {
                hostname: "lightsail.us-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-east-2":
            regionInfo = {
                hostname: "lightsail.us-east-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-west-2":
            regionInfo = {
                hostname: "lightsail.us-west-2.amazonaws.com",
                partition: "aws",
            };
            break;
        // Next, try to match partition endpoints.
        default:
            if (AWS_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_TEMPLATE.replace("{region}", region),
                    partition: "aws",
                };
            }
            if (AWS_CN_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_CN_TEMPLATE.replace("{region}", region),
                    partition: "aws-cn",
                };
            }
            if (AWS_ISO_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
                    partition: "aws-iso",
                };
            }
            if (AWS_ISO_B_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
                    partition: "aws-iso-b",
                };
            }
            if (AWS_US_GOV_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
                    partition: "aws-us-gov",
                };
            }
            // Finally, assume it's an AWS partition endpoint.
            if (regionInfo === undefined) {
                regionInfo = {
                    hostname: AWS_TEMPLATE.replace("{region}", region),
                    partition: "aws",
                };
            }
    }
    return Promise.resolve(__assign({ signingService: "lightsail" }, regionInfo));
};
//# sourceMappingURL=endpoints.js.map