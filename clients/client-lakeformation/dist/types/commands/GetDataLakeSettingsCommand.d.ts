import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetDataLakeSettingsRequest, GetDataLakeSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDataLakeSettingsCommandInput extends GetDataLakeSettingsRequest {
}
export interface GetDataLakeSettingsCommandOutput extends GetDataLakeSettingsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetDataLakeSettingsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetDataLakeSettingsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetDataLakeSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataLakeSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataLakeSettingsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDataLakeSettingsCommand extends $Command<GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GetDataLakeSettingsCommandInput;
    constructor(input: GetDataLakeSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
