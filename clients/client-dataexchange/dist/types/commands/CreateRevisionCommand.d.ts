import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { CreateRevisionRequest, CreateRevisionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRevisionCommandInput extends CreateRevisionRequest {
}
export interface CreateRevisionCommandOutput extends CreateRevisionResponse, __MetadataBearer {
}
/**
 * <p>This operation creates a revision for a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new CreateRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRevisionCommandInput} for command's `input` shape.
 * @see {@link CreateRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRevisionCommand extends $Command<CreateRevisionCommandInput, CreateRevisionCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: CreateRevisionCommandInput;
    constructor(input: CreateRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRevisionCommandInput, CreateRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
