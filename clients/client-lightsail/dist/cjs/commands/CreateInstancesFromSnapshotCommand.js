"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInstancesFromSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates one or more new instances from a manual or automatic snapshot of an
 *       instance.</p>
 *          <p>The <code>create instances from snapshot</code> operation supports tag-based access
 *       control via request tags and resource tags applied to the resource identified by
 *         <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateInstancesFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateInstancesFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateInstancesFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstancesFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateInstancesFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateInstancesFromSnapshotCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "CreateInstancesFromSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateInstancesFromSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateInstancesFromSnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateInstancesFromSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateInstancesFromSnapshotCommand(output, context);
    }
}
exports.CreateInstancesFromSnapshotCommand = CreateInstancesFromSnapshotCommand;
//# sourceMappingURL=CreateInstancesFromSnapshotCommand.js.map