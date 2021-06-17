import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetResourceShareAssociationsRequest, GetResourceShareAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourceShareAssociationsCommandInput extends GetResourceShareAssociationsRequest {
}
export interface GetResourceShareAssociationsCommandOutput extends GetResourceShareAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Gets the resources or principals for the resource shares that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceShareAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceShareAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourceShareAssociationsCommand extends $Command<GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput, RAMClientResolvedConfig> {
    readonly input: GetResourceShareAssociationsCommandInput;
    constructor(input: GetResourceShareAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
