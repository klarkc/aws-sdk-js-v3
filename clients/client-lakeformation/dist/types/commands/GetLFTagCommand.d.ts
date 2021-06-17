import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetLFTagRequest, GetLFTagResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLFTagCommandInput extends GetLFTagRequest {
}
export interface GetLFTagCommandOutput extends GetLFTagResponse, __MetadataBearer {
}
/**
 * <p>Returns a tag definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLFTagCommandInput} for command's `input` shape.
 * @see {@link GetLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLFTagCommand extends $Command<GetLFTagCommandInput, GetLFTagCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GetLFTagCommandInput;
    constructor(input: GetLFTagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLFTagCommandInput, GetLFTagCommandOutput>;
    private serialize;
    private deserialize;
}
