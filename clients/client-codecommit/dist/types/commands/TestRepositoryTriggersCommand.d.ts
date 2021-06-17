import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { TestRepositoryTriggersInput, TestRepositoryTriggersOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestRepositoryTriggersCommandInput extends TestRepositoryTriggersInput {
}
export interface TestRepositoryTriggersCommandOutput extends TestRepositoryTriggersOutput, __MetadataBearer {
}
/**
 * <p>Tests the functionality of repository triggers by sending information to the trigger
 *             target. If real data is available in the repository, the test sends data from the last
 *             commit. If no data is available, sample data is generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, TestRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, TestRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new TestRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link TestRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestRepositoryTriggersCommand extends $Command<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: TestRepositoryTriggersCommandInput;
    constructor(input: TestRepositoryTriggersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
