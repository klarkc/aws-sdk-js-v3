import { __extends } from "tslib";
import { GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSchemaCreationStatusCommand,
  serializeAws_restJson1GetSchemaCreationStatusCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current status of a schema creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSchemaCreationStatusCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSchemaCreationStatusCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetSchemaCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaCreationStatusCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSchemaCreationStatusCommand = /** @class */ (function (_super) {
  __extends(GetSchemaCreationStatusCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSchemaCreationStatusCommand(input) {
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
  GetSchemaCreationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetSchemaCreationStatusCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSchemaCreationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSchemaCreationStatusResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSchemaCreationStatusCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSchemaCreationStatusCommand(input, context);
  };
  GetSchemaCreationStatusCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSchemaCreationStatusCommand(output, context);
  };
  return GetSchemaCreationStatusCommand;
})($Command);
export { GetSchemaCreationStatusCommand };
//# sourceMappingURL=GetSchemaCreationStatusCommand.js.map
