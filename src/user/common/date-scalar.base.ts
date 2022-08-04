import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description: string;

  parseValue(inputValue: number): Date {
    return new Date(inputValue);
  }

  serialize(outputValue: Date): number {
    return outputValue.getTime();
  }

  parseLiteral(valueNode: ValueNode): Date {
    if (valueNode.kind === Kind.INT) {
      return new Date(valueNode.value);
    }

    return null;
  }
}