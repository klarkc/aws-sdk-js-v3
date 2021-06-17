import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateReturnShippingLabelRequest, CreateReturnShippingLabelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReturnShippingLabelCommandInput extends CreateReturnShippingLabelRequest {
}
export interface CreateReturnShippingLabelCommandOutput extends CreateReturnShippingLabelResult, __MetadataBearer {
}
/**
 * <p>Creates a shipping label that will be used to return the Snow device to AWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link CreateReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReturnShippingLabelCommand extends $Command<CreateReturnShippingLabelCommandInput, CreateReturnShippingLabelCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CreateReturnShippingLabelCommandInput;
    constructor(input: CreateReturnShippingLabelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReturnShippingLabelCommandInput, CreateReturnShippingLabelCommandOutput>;
    private serialize;
    private deserialize;
}
