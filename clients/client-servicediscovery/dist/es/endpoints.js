import { __assign } from "tslib";
// Partition default templates
var AWS_TEMPLATE = "servicediscovery.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "servicediscovery.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "servicediscovery.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "servicediscovery.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "servicediscovery.{region}.amazonaws.com";
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
        case "af-south-1":
            regionInfo = {
                hostname: "servicediscovery.af-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-east-1":
            regionInfo = {
                hostname: "servicediscovery.ap-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-northeast-1":
            regionInfo = {
                hostname: "servicediscovery.ap-northeast-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-northeast-2":
            regionInfo = {
                hostname: "servicediscovery.ap-northeast-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-south-1":
            regionInfo = {
                hostname: "servicediscovery.ap-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-southeast-1":
            regionInfo = {
                hostname: "servicediscovery.ap-southeast-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-southeast-2":
            regionInfo = {
                hostname: "servicediscovery.ap-southeast-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ca-central-1":
            regionInfo = {
                hostname: "servicediscovery.ca-central-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "cn-north-1":
            regionInfo = {
                hostname: "servicediscovery.cn-north-1.amazonaws.com.cn",
                partition: "aws-cn",
            };
            break;
        case "cn-northwest-1":
            regionInfo = {
                hostname: "servicediscovery.cn-northwest-1.amazonaws.com.cn",
                partition: "aws-cn",
            };
            break;
        case "eu-central-1":
            regionInfo = {
                hostname: "servicediscovery.eu-central-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-north-1":
            regionInfo = {
                hostname: "servicediscovery.eu-north-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-south-1":
            regionInfo = {
                hostname: "servicediscovery.eu-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-1":
            regionInfo = {
                hostname: "servicediscovery.eu-west-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-2":
            regionInfo = {
                hostname: "servicediscovery.eu-west-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-3":
            regionInfo = {
                hostname: "servicediscovery.eu-west-3.amazonaws.com",
                partition: "aws",
            };
            break;
        case "me-south-1":
            regionInfo = {
                hostname: "servicediscovery.me-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "sa-east-1":
            regionInfo = {
                hostname: "servicediscovery.sa-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "servicediscovery-fips":
            regionInfo = {
                hostname: "servicediscovery-fips.ca-central-1.amazonaws.com",
                partition: "aws",
                signingRegion: "ca-central-1",
            };
            break;
        case "us-east-1":
            regionInfo = {
                hostname: "servicediscovery.us-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-east-2":
            regionInfo = {
                hostname: "servicediscovery.us-east-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-west-1":
            regionInfo = {
                hostname: "servicediscovery.us-west-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-west-2":
            regionInfo = {
                hostname: "servicediscovery.us-west-2.amazonaws.com",
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
    return Promise.resolve(__assign({ signingService: "servicediscovery" }, regionInfo));
};
//# sourceMappingURL=endpoints.js.map