import { DescribeDocumentVersionsCommandInput, DescribeDocumentVersionsCommandOutput } from "../commands/DescribeDocumentVersionsCommand";
import { WorkDocsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDocumentVersions(config: WorkDocsPaginationConfiguration, input: DescribeDocumentVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeDocumentVersionsCommandOutput>;
