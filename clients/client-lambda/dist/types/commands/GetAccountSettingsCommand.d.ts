import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccountSettingsCommandInput extends GetAccountSettingsRequest {
}
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetAccountSettingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetAccountSettingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccountSettingsCommand extends $Command<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetAccountSettingsCommandInput;
    constructor(input: GetAccountSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
