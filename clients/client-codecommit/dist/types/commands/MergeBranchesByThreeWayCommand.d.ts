import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MergeBranchesByThreeWayCommandInput extends MergeBranchesByThreeWayInput {
}
export interface MergeBranchesByThreeWayCommandOutput extends MergeBranchesByThreeWayOutput, __MetadataBearer {
}
/**
 * <p>Merges two specified branches using the three-way merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesByThreeWayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MergeBranchesByThreeWayCommand extends $Command<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergeBranchesByThreeWayCommandInput;
    constructor(input: MergeBranchesByThreeWayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput>;
    private serialize;
    private deserialize;
}
