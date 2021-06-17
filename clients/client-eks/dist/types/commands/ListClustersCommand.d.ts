import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListClustersCommandInput extends ListClustersRequest {
}
export interface ListClustersCommandOutput extends ListClustersResponse, __MetadataBearer {
}
/**
 * <p>Lists the Amazon EKS clusters in your AWS account in the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListClustersCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListClustersCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListClustersCommand extends $Command<ListClustersCommandInput, ListClustersCommandOutput, EKSClientResolvedConfig> {
    readonly input: ListClustersCommandInput;
    constructor(input: ListClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClustersCommandInput, ListClustersCommandOutput>;
    private serialize;
    private deserialize;
}
