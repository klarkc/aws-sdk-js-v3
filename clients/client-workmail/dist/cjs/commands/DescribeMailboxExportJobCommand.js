"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeMailboxExportJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the current status of a mailbox export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeMailboxExportJobCommand extends smithy_client_1.Command {
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
        const clientName = "WorkMailClient";
        const commandName = "DescribeMailboxExportJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeMailboxExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeMailboxExportJobResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeMailboxExportJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeMailboxExportJobCommand(output, context);
    }
}
exports.DescribeMailboxExportJobCommand = DescribeMailboxExportJobCommand;
//# sourceMappingURL=DescribeMailboxExportJobCommand.js.map