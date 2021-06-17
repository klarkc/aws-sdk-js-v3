import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteNodegroupRequest, DeleteNodegroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNodegroupCommandInput extends DeleteNodegroupRequest {
}
export interface DeleteNodegroupCommandOutput extends DeleteNodegroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes an Amazon EKS node group for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNodegroupCommandInput} for command's `input` shape.
 * @see {@link DeleteNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNodegroupCommand extends $Command<DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput, EKSClientResolvedConfig> {
    readonly input: DeleteNodegroupCommandInput;
    constructor(input: DeleteNodegroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput>;
    private serialize;
    private deserialize;
}
