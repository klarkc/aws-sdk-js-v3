import { GreengrassV2 } from "../GreengrassV2";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { PaginationConfiguration } from "@aws-sdk/types";
export interface GreengrassV2PaginationConfiguration extends PaginationConfiguration {
    client: GreengrassV2 | GreengrassV2Client;
}
