import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateAddonRequest, UpdateAddonResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAddonCommandInput extends UpdateAddonRequest {
}
export interface UpdateAddonCommandOutput extends UpdateAddonResponse, __MetadataBearer {
}
/**
 * <p>Updates an Amazon EKS add-on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAddonCommandInput} for command's `input` shape.
 * @see {@link UpdateAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAddonCommand extends $Command<UpdateAddonCommandInput, UpdateAddonCommandOutput, EKSClientResolvedConfig> {
    readonly input: UpdateAddonCommandInput;
    constructor(input: UpdateAddonCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAddonCommandInput, UpdateAddonCommandOutput>;
    private serialize;
    private deserialize;
}
