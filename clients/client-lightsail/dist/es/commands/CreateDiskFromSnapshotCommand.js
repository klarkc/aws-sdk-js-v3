import { __extends } from "tslib";
import { CreateDiskFromSnapshotRequest, CreateDiskFromSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDiskFromSnapshotCommand, serializeAws_json1_1CreateDiskFromSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting
 *       disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g.,
 *         <code>us-east-2a</code>).</p>
 *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control via
 *       request tags and resource tags applied to the resource identified by <code>disk snapshot
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDiskFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDiskFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDiskFromSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateDiskFromSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDiskFromSnapshotCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateDiskFromSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateDiskFromSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDiskFromSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDiskFromSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDiskFromSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDiskFromSnapshotCommand(input, context);
    };
    CreateDiskFromSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDiskFromSnapshotCommand(output, context);
    };
    return CreateDiskFromSnapshotCommand;
}($Command));
export { CreateDiskFromSnapshotCommand };
//# sourceMappingURL=CreateDiskFromSnapshotCommand.js.map