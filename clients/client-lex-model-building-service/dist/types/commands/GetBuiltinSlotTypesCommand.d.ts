import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetBuiltinSlotTypesRequest, GetBuiltinSlotTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBuiltinSlotTypesCommandInput extends GetBuiltinSlotTypesRequest {
}
export interface GetBuiltinSlotTypesCommandOutput extends GetBuiltinSlotTypesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of built-in slot types that meet the specified
 *       criteria.</p>
 *          <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
 *         Kit</i>.</p>
 *
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltInSlotTypes</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinSlotTypesCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBuiltinSlotTypesCommand extends $Command<GetBuiltinSlotTypesCommandInput, GetBuiltinSlotTypesCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetBuiltinSlotTypesCommandInput;
    constructor(input: GetBuiltinSlotTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBuiltinSlotTypesCommandInput, GetBuiltinSlotTypesCommandOutput>;
    private serialize;
    private deserialize;
}
