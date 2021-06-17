import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetImportRequest, GetImportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImportCommandInput extends GetImportRequest {
}
export interface GetImportCommandOutput extends GetImportResponse, __MetadataBearer {
}
/**
 * <p>Gets information about an import job started with the
 *         <code>StartImport</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetImportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetImportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportCommandInput} for command's `input` shape.
 * @see {@link GetImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImportCommand extends $Command<GetImportCommandInput, GetImportCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetImportCommandInput;
    constructor(input: GetImportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImportCommandInput, GetImportCommandOutput>;
    private serialize;
    private deserialize;
}
