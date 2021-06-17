"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArchiveCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an archive of events with the specified settings. When you create an archive,
 *       incoming events might not immediately start being sent to the archive. Allow a short period of
 *       time for changes to take effect. If you do not specify a pattern to filter events sent to the
 *       archive, all events are sent to the archive except replayed events. Replayed events are not
 *       sent to an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateArchiveCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchEventsClient";
        const commandName = "CreateArchiveCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateArchiveRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateArchiveResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateArchiveCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateArchiveCommand(output, context);
    }
}
exports.CreateArchiveCommand = CreateArchiveCommand;
//# sourceMappingURL=CreateArchiveCommand.js.map