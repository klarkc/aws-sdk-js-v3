import { __extends } from "tslib";
import { TestConnectionMessage, TestConnectionResponse } from "../models/models_0";
import { deserializeAws_json1_1TestConnectionCommand, serializeAws_json1_1TestConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests the connection between the replication instance and the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, TestConnectionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, TestConnectionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new TestConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestConnectionCommandInput} for command's `input` shape.
 * @see {@link TestConnectionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestConnectionCommand = /** @class */ (function (_super) {
    __extends(TestConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestConnectionCommand(input) {
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
    TestConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "TestConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestConnectionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: TestConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TestConnectionCommand(input, context);
    };
    TestConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TestConnectionCommand(output, context);
    };
    return TestConnectionCommand;
}($Command));
export { TestConnectionCommand };
//# sourceMappingURL=TestConnectionCommand.js.map