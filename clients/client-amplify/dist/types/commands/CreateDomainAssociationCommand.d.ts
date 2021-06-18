import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { CreateDomainAssociationRequest, CreateDomainAssociationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateDomainAssociationCommandInput extends CreateDomainAssociationRequest {}
export interface CreateDomainAssociationCommandOutput extends CreateDomainAssociationResult, __MetadataBearer {}
/**
 * <p> Creates a new domain association for an Amplify app. This action associates a custom
 *             domain with the Amplify app </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDomainAssociationCommand extends $Command<
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput,
  AmplifyClientResolvedConfig
> {
  readonly input: CreateDomainAssociationCommandInput;
  constructor(input: CreateDomainAssociationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDomainAssociationCommandInput, CreateDomainAssociationCommandOutput>;
  private serialize;
  private deserialize;
}
