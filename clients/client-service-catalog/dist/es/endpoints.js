import { __assign } from "tslib";
// Partition default templates
var AWS_TEMPLATE = "servicecatalog.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "servicecatalog.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "servicecatalog.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "servicecatalog.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "servicecatalog.{region}.amazonaws.com";
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
                hostname: "servicecatalog.af-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-east-1":
            regionInfo = {
                hostname: "servicecatalog.ap-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-northeast-1":
            regionInfo = {
                hostname: "servicecatalog.ap-northeast-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-northeast-2":
            regionInfo = {
                hostname: "servicecatalog.ap-northeast-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-northeast-3":
            regionInfo = {
                hostname: "servicecatalog.ap-northeast-3.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-south-1":
            regionInfo = {
                hostname: "servicecatalog.ap-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-southeast-1":
            regionInfo = {
                hostname: "servicecatalog.ap-southeast-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ap-southeast-2":
            regionInfo = {
                hostname: "servicecatalog.ap-southeast-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "ca-central-1":
            regionInfo = {
                hostname: "servicecatalog.ca-central-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "cn-north-1":
            regionInfo = {
                hostname: "servicecatalog.cn-north-1.amazonaws.com.cn",
                partition: "aws-cn",
            };
            break;
        case "cn-northwest-1":
            regionInfo = {
                hostname: "servicecatalog.cn-northwest-1.amazonaws.com.cn",
                partition: "aws-cn",
            };
            break;
        case "eu-central-1":
            regionInfo = {
                hostname: "servicecatalog.eu-central-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-north-1":
            regionInfo = {
                hostname: "servicecatalog.eu-north-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-south-1":
            regionInfo = {
                hostname: "servicecatalog.eu-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-1":
            regionInfo = {
                hostname: "servicecatalog.eu-west-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-2":
            regionInfo = {
                hostname: "servicecatalog.eu-west-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "eu-west-3":
            regionInfo = {
                hostname: "servicecatalog.eu-west-3.amazonaws.com",
                partition: "aws",
            };
            break;
        case "me-south-1":
            regionInfo = {
                hostname: "servicecatalog.me-south-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "sa-east-1":
            regionInfo = {
                hostname: "servicecatalog.sa-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-east-1":
            regionInfo = {
                hostname: "servicecatalog.us-east-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-east-1-fips":
            regionInfo = {
                hostname: "servicecatalog-fips.us-east-1.amazonaws.com",
                partition: "aws",
                signingRegion: "us-east-1",
            };
            break;
        case "us-east-2":
            regionInfo = {
                hostname: "servicecatalog.us-east-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-east-2-fips":
            regionInfo = {
                hostname: "servicecatalog-fips.us-east-2.amazonaws.com",
                partition: "aws",
                signingRegion: "us-east-2",
            };
            break;
        case "us-gov-east-1":
            regionInfo = {
                hostname: "servicecatalog.us-gov-east-1.amazonaws.com",
                partition: "aws-us-gov",
            };
            break;
        case "us-gov-east-1-fips":
            regionInfo = {
                hostname: "servicecatalog-fips.us-gov-east-1.amazonaws.com",
                partition: "aws-us-gov",
                signingRegion: "us-gov-east-1",
            };
            break;
        case "us-gov-west-1":
            regionInfo = {
                hostname: "servicecatalog.us-gov-west-1.amazonaws.com",
                partition: "aws-us-gov",
            };
            break;
        case "us-gov-west-1-fips":
            regionInfo = {
                hostname: "servicecatalog-fips.us-gov-west-1.amazonaws.com",
                partition: "aws-us-gov",
                signingRegion: "us-gov-west-1",
            };
            break;
        case "us-west-1":
            regionInfo = {
                hostname: "servicecatalog.us-west-1.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-west-1-fips":
            regionInfo = {
                hostname: "servicecatalog-fips.us-west-1.amazonaws.com",
                partition: "aws",
                signingRegion: "us-west-1",
            };
            break;
        case "us-west-2":
            regionInfo = {
                hostname: "servicecatalog.us-west-2.amazonaws.com",
                partition: "aws",
            };
            break;
        case "us-west-2-fips":
            regionInfo = {
                hostname: "servicecatalog-fips.us-west-2.amazonaws.com",
                partition: "aws",
                signingRegion: "us-west-2",
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
    return Promise.resolve(__assign({ signingService: "servicecatalog" }, regionInfo));
};
//# sourceMappingURL=endpoints.js.map