import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionsRequest, GetUserDefinedFunctionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUserDefinedFunctionsCommandInput extends GetUserDefinedFunctionsRequest {
}
export interface GetUserDefinedFunctionsCommandOutput extends GetUserDefinedFunctionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves multiple function definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUserDefinedFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserDefinedFunctionsCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUserDefinedFunctionsCommand extends $Command<GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetUserDefinedFunctionsCommandInput;
    constructor(input: GetUserDefinedFunctionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput>;
    private serialize;
    private deserialize;
}
