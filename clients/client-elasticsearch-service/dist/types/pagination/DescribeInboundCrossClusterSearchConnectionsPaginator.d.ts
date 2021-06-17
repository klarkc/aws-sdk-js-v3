import { DescribeInboundCrossClusterSearchConnectionsCommandInput, DescribeInboundCrossClusterSearchConnectionsCommandOutput } from "../commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInboundCrossClusterSearchConnections(config: ElasticsearchServicePaginationConfiguration, input: DescribeInboundCrossClusterSearchConnectionsCommandInput, ...additionalArguments: any): Paginator<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
