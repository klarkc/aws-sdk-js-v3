import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CreateLFTagRequest, CreateLFTagResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLFTagCommandInput extends CreateLFTagRequest {
}
export interface CreateLFTagCommandOutput extends CreateLFTagResponse, __MetadataBearer {
}
/**
 * <p>Creates a tag with the specified name and values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new CreateLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLFTagCommandInput} for command's `input` shape.
 * @see {@link CreateLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLFTagCommand extends $Command<CreateLFTagCommandInput, CreateLFTagCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: CreateLFTagCommandInput;
    constructor(input: CreateLFTagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLFTagCommandInput, CreateLFTagCommandOutput>;
    private serialize;
    private deserialize;
}
