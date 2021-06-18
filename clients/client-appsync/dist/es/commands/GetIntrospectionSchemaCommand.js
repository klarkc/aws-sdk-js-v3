import { __extends } from "tslib";
import { GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIntrospectionSchemaCommand,
  serializeAws_restJson1GetIntrospectionSchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the introspection schema for a GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetIntrospectionSchemaCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetIntrospectionSchemaCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetIntrospectionSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntrospectionSchemaCommandInput} for command's `input` shape.
 * @see {@link GetIntrospectionSchemaCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntrospectionSchemaCommand = /** @class */ (function (_super) {
  __extends(GetIntrospectionSchemaCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetIntrospectionSchemaCommand(input) {
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
  GetIntrospectionSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetIntrospectionSchemaCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetIntrospectionSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntrospectionSchemaResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetIntrospectionSchemaCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetIntrospectionSchemaCommand(input, context);
  };
  GetIntrospectionSchemaCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetIntrospectionSchemaCommand(output, context);
  };
  return GetIntrospectionSchemaCommand;
})($Command);
export { GetIntrospectionSchemaCommand };
//# sourceMappingURL=GetIntrospectionSchemaCommand.js.map
