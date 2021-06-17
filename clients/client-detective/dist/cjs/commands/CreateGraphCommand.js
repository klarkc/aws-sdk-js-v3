"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGraphCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new behavior graph for the calling account, and sets that account as the
 *          administrator account. This operation is called by the account that is enabling
 *          Detective.</p>
 *          <p>Before you try to enable Detective, make sure that your account has been enrolled in
 *          Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable
 *          Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable
 *          Detective, it checks whether your data volume is within the Detective quota. If it exceeds the
 *          quota, then you cannot enable Detective. </p>
 *          <p>The operation also enables Detective for the calling account in the currently selected
 *          Region. It returns the ARN of the new behavior graph.</p>
 *          <p>
 *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
 *          the new behavior graph.</p>
 *          <p>An account can only be the administrator account for one behavior graph within a Region.
 *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
 *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new CreateGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGraphCommandInput} for command's `input` shape.
 * @see {@link CreateGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateGraphCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DetectiveClient";
        const commandName = "CreateGraphCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateGraphResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateGraphCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateGraphCommand(output, context);
    }
}
exports.CreateGraphCommand = CreateGraphCommand;
//# sourceMappingURL=CreateGraphCommand.js.map