import { __extends } from "tslib";
import { CreateProgressUpdateStreamRequest, CreateProgressUpdateStreamResult } from "../models/models_0";
import { deserializeAws_json1_1CreateProgressUpdateStreamCommand, serializeAws_json1_1CreateProgressUpdateStreamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a progress update stream which is an AWS resource used for access control as
 *          well as a namespace for migration task names that is implicitly linked to your AWS account.
 *          It must uniquely identify the migration tool as it is used for all updates made by the
 *          tool; however, it does not need to be unique for each AWS account because it is scoped to
 *          the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, CreateProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, CreateProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new CreateProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateProgressUpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProgressUpdateStreamCommand = /** @class */ (function (_super) {
    __extends(CreateProgressUpdateStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProgressUpdateStreamCommand(input) {
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
    CreateProgressUpdateStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "CreateProgressUpdateStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProgressUpdateStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProgressUpdateStreamResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProgressUpdateStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProgressUpdateStreamCommand(input, context);
    };
    CreateProgressUpdateStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProgressUpdateStreamCommand(output, context);
    };
    return CreateProgressUpdateStreamCommand;
}($Command));
export { CreateProgressUpdateStreamCommand };
//# sourceMappingURL=CreateProgressUpdateStreamCommand.js.map