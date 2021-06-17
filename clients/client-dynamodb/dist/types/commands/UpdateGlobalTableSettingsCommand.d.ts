import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGlobalTableSettingsCommandInput extends UpdateGlobalTableSettingsInput {
}
export interface UpdateGlobalTableSettingsCommandOutput extends UpdateGlobalTableSettingsOutput, __MetadataBearer {
}
/**
 * <p>Updates settings for a global table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGlobalTableSettingsCommand extends $Command<UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateGlobalTableSettingsCommandInput;
    constructor(input: UpdateGlobalTableSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
