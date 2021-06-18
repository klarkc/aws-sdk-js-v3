import { __extends } from "tslib";
import { CreateConnectorProfileRequest, CreateConnectorProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateConnectorProfileCommand,
  serializeAws_restJson1CreateConnectorProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Creates a new connector profile associated with your AWS account. There is a soft quota of 100 connector profiles per AWS account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, CreateConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, CreateConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new CreateConnectorProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectorProfileCommand = /** @class */ (function (_super) {
  __extends(CreateConnectorProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateConnectorProfileCommand(input) {
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
  CreateConnectorProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "CreateConnectorProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateConnectorProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectorProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateConnectorProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateConnectorProfileCommand(input, context);
  };
  CreateConnectorProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateConnectorProfileCommand(output, context);
  };
  return CreateConnectorProfileCommand;
})($Command);
export { CreateConnectorProfileCommand };
//# sourceMappingURL=CreateConnectorProfileCommand.js.map
