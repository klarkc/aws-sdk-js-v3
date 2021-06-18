import { __extends } from "tslib";
import { StartSchemaCreationRequest, StartSchemaCreationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartSchemaCreationCommand,
  serializeAws_restJson1StartSchemaCreationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new schema to your GraphQL API.</p>
 *          <p>This operation is asynchronous. Use  to
 *          determine when it has completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaCreationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartSchemaCreationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new StartSchemaCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSchemaCreationCommandInput} for command's `input` shape.
 * @see {@link StartSchemaCreationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSchemaCreationCommand = /** @class */ (function (_super) {
  __extends(StartSchemaCreationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartSchemaCreationCommand(input) {
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
  StartSchemaCreationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "StartSchemaCreationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartSchemaCreationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSchemaCreationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartSchemaCreationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartSchemaCreationCommand(input, context);
  };
  StartSchemaCreationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartSchemaCreationCommand(output, context);
  };
  return StartSchemaCreationCommand;
})($Command);
export { StartSchemaCreationCommand };
//# sourceMappingURL=StartSchemaCreationCommand.js.map
