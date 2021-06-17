import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { CreateDataSetRequest, CreateDataSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDataSetCommandInput extends CreateDataSetRequest {
}
export interface CreateDataSetCommandOutput extends CreateDataSetResponse, __MetadataBearer {
}
/**
 * <p>This operation creates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new CreateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSetCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDataSetCommand extends $Command<CreateDataSetCommandInput, CreateDataSetCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: CreateDataSetCommandInput;
    constructor(input: CreateDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSetCommandInput, CreateDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
