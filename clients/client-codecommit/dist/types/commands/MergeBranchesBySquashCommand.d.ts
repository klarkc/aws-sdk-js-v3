import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesBySquashInput, MergeBranchesBySquashOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MergeBranchesBySquashCommandInput extends MergeBranchesBySquashInput {
}
export interface MergeBranchesBySquashCommandOutput extends MergeBranchesBySquashOutput, __MetadataBearer {
}
/**
 * <p>Merges two branches using the squash merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesBySquashCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesBySquashCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesBySquashCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesBySquashCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesBySquashCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MergeBranchesBySquashCommand extends $Command<MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergeBranchesBySquashCommandInput;
    constructor(input: MergeBranchesBySquashCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput>;
    private serialize;
    private deserialize;
}
