import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetResourceLFTagsRequest, GetResourceLFTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourceLFTagsCommandInput extends GetResourceLFTagsRequest {
}
export interface GetResourceLFTagsCommandOutput extends GetResourceLFTagsResponse, __MetadataBearer {
}
/**
 * <p>Returns the tags applied to a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetResourceLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetResourceLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetResourceLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceLFTagsCommandInput} for command's `input` shape.
 * @see {@link GetResourceLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourceLFTagsCommand extends $Command<GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GetResourceLFTagsCommandInput;
    constructor(input: GetResourceLFTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput>;
    private serialize;
    private deserialize;
}
