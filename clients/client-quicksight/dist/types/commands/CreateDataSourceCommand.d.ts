import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDataSourceCommandInput extends CreateDataSourceRequest {
}
export interface CreateDataSourceCommandOutput extends CreateDataSourceResponse, __MetadataBearer {
}
/**
 * <p>Creates a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDataSourceCommand extends $Command<CreateDataSourceCommandInput, CreateDataSourceCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateDataSourceCommandInput;
    constructor(input: CreateDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
