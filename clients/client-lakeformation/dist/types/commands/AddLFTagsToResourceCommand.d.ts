import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { AddLFTagsToResourceRequest, AddLFTagsToResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddLFTagsToResourceCommandInput extends AddLFTagsToResourceRequest {
}
export interface AddLFTagsToResourceCommandOutput extends AddLFTagsToResourceResponse, __MetadataBearer {
}
/**
 * <p>Attaches one or more tags to an existing resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, AddLFTagsToResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, AddLFTagsToResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new AddLFTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddLFTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddLFTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddLFTagsToResourceCommand extends $Command<AddLFTagsToResourceCommandInput, AddLFTagsToResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: AddLFTagsToResourceCommandInput;
    constructor(input: AddLFTagsToResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddLFTagsToResourceCommandInput, AddLFTagsToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
