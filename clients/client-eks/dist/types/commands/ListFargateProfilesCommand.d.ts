import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListFargateProfilesRequest, ListFargateProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFargateProfilesCommandInput extends ListFargateProfilesRequest {
}
export interface ListFargateProfilesCommandOutput extends ListFargateProfilesResponse, __MetadataBearer {
}
/**
 * <p>Lists the AWS Fargate profiles associated with the specified cluster in your AWS
 *             account in the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListFargateProfilesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListFargateProfilesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListFargateProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFargateProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFargateProfilesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFargateProfilesCommand extends $Command<ListFargateProfilesCommandInput, ListFargateProfilesCommandOutput, EKSClientResolvedConfig> {
    readonly input: ListFargateProfilesCommandInput;
    constructor(input: ListFargateProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFargateProfilesCommandInput, ListFargateProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
