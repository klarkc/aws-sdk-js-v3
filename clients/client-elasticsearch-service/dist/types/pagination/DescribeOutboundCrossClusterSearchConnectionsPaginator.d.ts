import { DescribeOutboundCrossClusterSearchConnectionsCommandInput, DescribeOutboundCrossClusterSearchConnectionsCommandOutput } from "../commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOutboundCrossClusterSearchConnections(config: ElasticsearchServicePaginationConfiguration, input: DescribeOutboundCrossClusterSearchConnectionsCommandInput, ...additionalArguments: any): Paginator<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
